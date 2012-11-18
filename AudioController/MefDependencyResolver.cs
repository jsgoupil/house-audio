using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.ComponentModel.Composition.Hosting;
using System.Linq;
using System.Text;
using System.Web.Mvc;

namespace AudioController
{
    public class MefDependencySolver : IDependencyResolver
    {
        private CompositionContainer compositionContainer;

        public MefDependencySolver(CompositionContainer compositionContainer)
        {
            this.compositionContainer = compositionContainer;
        }

        public object GetService(Type serviceType)
        {
            var export = this.compositionContainer
                .GetExports(serviceType, null, null).SingleOrDefault();

            return null != export ? export.Value : null;

            /*
            string name = AttributedModelServices.GetContractName(serviceType);

            return compositionContainer.GetExportedValueOrDefault<object>(name);*/
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            string name = AttributedModelServices.GetContractName(serviceType);

            try
            {
                return this.compositionContainer.GetExportedValues<object>(name);
            }
            catch
            {
                return new object[] { };
            }
        }
    }
}
