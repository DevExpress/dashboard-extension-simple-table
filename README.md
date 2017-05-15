A custom **Simple Table** item renders data from the measure / dimensions as an HTML table. 

You can use the Simple Table as a detail item along with the Master-Filtering feature.

## Installation

To add a custom Simple Table item extension to the Web Dashboard, follow the steps below.

1. Download the required scripts [here](https://github.com/DevExpress/dashboard-extension-simple-table/releases) and place them in your project.

2. Attach the download script to the project.
```xml
<script src="/your-path/dashboard-extension-simple-table/dist/simple-table.min.js"></script>
```

3. Handle the Web Dashboard's [BeforeRender](https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_BeforeRendertopic) event to perform client-side customization of the Web Dashboard control before the control and its elements have been rendered.
```xml
<dx:ASPxDashboard ID="ASPxDashboard1" runat="server" DashboardStorageFolder="~/App_Data">
  <ClientSideEvents BeforeRender="onBeforeRender" />
</dx:ASPxDashboard>
```

5. Register the custom item extension to add the Simple Table to the Web Dashboard.

```javascript
function onBeforeRender(sender) {
  var dashboardControl = sender.GetDashboardControl();
  dashboardControl.registerExtension(new CustomItemSimpleTableExtension(dashboardControl));
}
```


## Settings
The **Simple Table** dashboard item supports the following setting that you can configure in the Web Dashboard UI:


* **Show Headers** - Specifies whether to show the field headers in the table. The default value is *Auto*.

## License

This extension is distributed under the **MIT** license (free and open-source), but can only be used with a commercial DevExpress Dashboard software product. You can [review the license terms](https://www.devexpress.com/Support/EULAs/NetComponents.xml) or [download a free trial version](https://go.devexpress.com/DevExpressDownload_UniversalTrial.aspx) of the Dashboard suite at [DevExpress.com](https://www.devexpress.com).

## Support & Feedback

* Follow [this guideline](https://www.devexpress.com/Support/Center/Question/Details/T491859) for general information about a custom extension.
* To learn how to create a custom item, see the following [KB article](https://www.devexpress.com/Support/Center/Question/Details/T491984).
* To address questions regarding the Web Dashboard and JavaScript API, use [DevExpress Support Center](https://www.devexpress.com/Support/Center).
