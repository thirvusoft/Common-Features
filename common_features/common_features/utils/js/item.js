frappe.ui.form.on("Item", {
    refresh: function(frm){
        if (frm.doc.has_variants){
        if(frm.doc.variant_based_on==="Item Attribute"){
            frappe.db.get_single_value("Common Feature", "search_and_create_attribute").then((r)=>{
                if(r){
                    frm.remove_custom_button("Multiple Variants", "Create")
                    frm.add_custom_button(__("Multiple Variants"), function() {
                        console.log(frm)
                        erpnext.item.custom_show_multiple_variants_dialog(frm);
                    }, __('Create'));
                }
            })
        } 
    }
    }
})