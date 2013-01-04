// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioController
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.Composition.Hosting;
    using System.Linq;
    using System.Web.Http.Dependencies;

    /// <summary>
    /// MEF Mvc Dependency Resolver.
    /// </summary>
    public class MefMvcDependencyResolver : IDependencyResolver
    {
        /// <summary>
        /// Composition Container.
        /// </summary>
        private readonly CompositionContainer compositionContainer;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="compositionContainer">CompositionContainer</param>
        public MefMvcDependencyResolver(CompositionContainer compositionContainer)
        {
            this.compositionContainer = compositionContainer;
        }

        #region IDependencyResolver Members

        /// <summary>
        /// BeginScope.
        /// </summary>
        /// <returns>IDependencyScope</returns>
        public IDependencyScope BeginScope()
        {
            return this;
        }

        /// <summary>
        /// GetService.
        /// </summary>
        /// <param name="type">Type</param>
        /// <returns>object</returns>
        public object GetService(Type type)
        {
            var export = this.compositionContainer
                .GetExports(type, null, null).SingleOrDefault();

            return null != export ? export.Value : null;
        }

        /// <summary>
        /// GetServices.
        /// </summary>
        /// <param name="type">Type</param>
        /// <returns>List of object</returns>
        public IEnumerable<object> GetServices(Type type)
        {
            var exports = this.compositionContainer.GetExports(type, null, null);
            var exportList = new List<object>();
            if (exports.Any())
            {
                exportList.AddRange(exports.Select(export => export.Value));
            }

            return exportList;
        }

        /// <summary>
        /// Dispose.
        /// </summary>
        public void Dispose()
        {
        }

        #endregion
    }
}