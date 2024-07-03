sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], (Controller) => {
    "use strict";
 
    return Controller.extend("ui5.walkthrough.controller.App", {
       onShowText() {
          // show a native JavaScript alert
          alert("Beispieltext oben");
       }
    });
 });