# Copyright (c) 2023, Thirvusoft and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ThirvuSystemSettings(Document):
	def on_update(self):
		frappe.publish_realtime("thirvu-set-full-width", self.force_full_width)
