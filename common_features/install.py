import frappe

def after_install():
    create_cw_attributes()


def create_cw_attributes():
    attrs = frappe.get_all("Item Attribute Value", pluck="name")
    for i in attrs:
        child = frappe.get_doc("Item Attribute Value", i)
        doc = frappe.get_doc({
                'doctype':'CW Item Attribute',
                'attribute_value':child.get("old_value") or child.get("attribute_value"),
                'abbr':child.get("old_abbr") or child.get("abbr"),
                'item_attribute':child.get("parent"),
                'from_item_attribute':1
            })
        doc.save()