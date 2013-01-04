// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioController
{
    using System;
    using System.ComponentModel.Composition;
    using System.ComponentModel.Composition.Hosting;
    using System.Linq;
    using System.Web.Mvc;
    using System.Web.Routing;

    /// <summary>
    /// MEF Mvc Controller Factory.
    /// </summary>
    public class MefMvcControllerFactory : DefaultControllerFactory
    {
        /// <summary>
        /// Composition Container.
        /// </summary>
        private readonly CompositionContainer compositionContainer;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="compositionContainer">CompositionContainer</param>
        public MefMvcControllerFactory(CompositionContainer compositionContainer)
        {
            this.compositionContainer = compositionContainer;
        }

        /// <summary>
        /// Gets a controller instance.
        /// </summary>
        /// <param name="requestContext">RequestContext</param>
        /// <param name="controllerType">Type</param>
        /// <returns>Controller instance.</returns>
        protected override IController GetControllerInstance(
            RequestContext requestContext, Type controllerType)
        {
            if (controllerType == null)
            {
                return base.GetControllerInstance(requestContext, controllerType);
            }

            var export = this.compositionContainer
                .GetExports(controllerType, null, null).SingleOrDefault();

            IController result;

            if (null != export)
            {
                result = export.Value as IController;
            }
            else
            {
                result = base.GetControllerInstance(requestContext, controllerType);
                this.compositionContainer.ComposeParts(result);
            }

            return result;
        }
    }
}
