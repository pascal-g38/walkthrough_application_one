sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/Device"
], (UIComponent, JSONModel, ResourceModel, Device) => {
	"use strict";

	return UIComponent.extend("ui5.walkthrough.Component", {
        metadata : {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
         },

		init() {
			UIComponent.prototype.init.apply(this, arguments);

			const oData = {
				recipient: {
					name: "World"
				}
			};
			const oModel = new JSONModel(oData);
			this.setModel(oModel);

			const oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

			this.getRouter().initialize();

			const i18nModel = new ResourceModel({
				bundleName: "ui5.walkthrough.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
		}
	});
});
