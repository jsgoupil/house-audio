using AudioController.Controllers;
using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.ComponentModel.Composition.Hosting;
using System.Configuration;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace AudioController
{
    public static class MefConfig
    {
        public static void RegisterMef()
        {
            var compositionContainer = ConfigureContainer(); 
            ControllerBuilder.Current.SetControllerFactory(new MefMvcControllerFactory(compositionContainer));
            GlobalConfiguration.Configuration.DependencyResolver = new MefMvcDependencyResolver(compositionContainer);
        }

        private static CompositionContainer ConfigureContainer()
        {
            var assemblyCatalog = new DirectoryCatalog(System.Web.HttpContext.Current.Server.MapPath("~/Amplifier"));
            var asmCat = new AssemblyCatalog(typeof(HomeController).Assembly);
            var aggCat = new AggregateCatalog(assemblyCatalog, asmCat);
            var container = new CompositionContainer(aggCat, new MefNameValueCollectionExportProvider(ConfigurationManager.AppSettings));

            return container;
        }
    }
}