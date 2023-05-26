frappe.ui.form.on("Item", {
    refresh: function(frm){
        if (frm.doc.has_variants){
        if(frm.doc.variant_based_on==="Item Attribute"){
           
                    frm.remove_custom_button("Multiple Variants", "Create")
                    frm.add_custom_button(__("Multiple Variants"), function() {
                        erpnext.item.custom_show_multiple_variants_dialog(frm);
                    }, __('Create'));
                
        } 
    }
    }
})