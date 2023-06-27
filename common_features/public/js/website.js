frappe.provide('commonfeatures');

$(document).ready(function () {
    commonfeatures.setFullWidth();
    frappe.realtime.on("thirvu-set-full-width", commonfeatures.setFullWidth);
});

commonfeatures.setFullWidth = function (data) {
    let root = document.querySelector(':root');
    if (data !== undefined) {
        if (data) {
            root.style.setProperty('--thirvu-full-width', '100%');
        } else {
            root.style.setProperty('--thirvu-full-width', '90%');
        }
    } else {
        frappe.db.get_single_value("Thirvu System Settings", "force_full_width").then(r => {
            if (r) {
                root.style.setProperty('--thirvu-full-width', '100%');
            } else {
                root.style.setProperty('--thirvu-full-width', '90%');
            }
        });
    }
}
