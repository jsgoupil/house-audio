using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.ComponentModel.Composition.Hosting;
using System.Linq;
using System.Text;
using System.Web.Mvc;

namespace HouseAudio.AudioController
{
    public class MefControllerFactory: DefaultControllerFactory
    {
        private readonly CompositionContainer compositionContainer;

        public MefControllerFactory(CompositionContainer compositionContainer)
        {
            this.compositionContainer = compositionContainer;
        }

        protected override IController GetControllerInstance(System.Web.Routing.RequestContext requestContext, Type controllerType)
        {
            var export = this.compositionContainer.GetExports(controllerType, null, null).SingleOrDefault();

            IController result;

            if (export != null)
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
