import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_fields

def make_custom_fields():
    item_attribute()

def item_attribute():
    fields = {
        "Item Attribute Value": [
            dict(fieldname = "old_abbr", label = "Old Abbreviation", fieldtype = "Data", insert_after = "abbr"),
            dict(fieldname = "old_value", label = "Old Value", fieldtype = "Data", insert_after = "old_abbr"),
            dict(fieldname = "is_mandatory_attribute", label = "Mandatory Attribute", fieldtype = "Check", insert_after = "old_abbr")
        ],
        "Item Attribute": [
            dict(fieldname = "is_mandatory_attribute", label = "Mandatory Attribute", fieldtype = "Check", insert_after = "numeric_values")
        ]
    }
    create_custom_fields(fields)