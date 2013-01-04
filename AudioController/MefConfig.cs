// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioController
{
    using System.ComponentModel.Composition.Hosting;
    using System.Configuration;
    using System.Web.Http;
    using System.Web.Mvc;
    using HouseAudio.AudioController.Controllers;

    /// <summary>
    /// MEF configuration.
    /// </summary>
    public static class MefConfig
    {
        /// <summary>
        /// Registers MEF.
        /// </summary>
        public static void RegisterMef()
        {
            var compositionContainer = ConfigureContainer(); 
            ControllerBuilder.Current.SetControllerFactory(new MefMvcControllerFactory(compositionContainer));
            GlobalConfiguration.Configuration.DependencyResolver = new MefMvcDependencyResolver(compositionContainer);
        }

        /// <summary>
        /// Configures the container.
        /// </summary>
        /// <returns>Container</returns>
        private static CompositionContainer ConfigureContainer()
        {
            var assemblyCatalog = new DirectoryCatalog(System.Web.HttpContext.Current.Server.MapPath("~/Amplifier"));
            var asmCat = new AssemblyCatalog(typeof(HomeController).Assembly);
            var aggCat = new AggregateCatalog(assemblyCatalog, asmCat);
            var container = new CompositionContainer(aggCat, true, new MefNameValueCollectionExportProvider(ConfigurationManager.AppSettings));

            return container;
        }
    }
}