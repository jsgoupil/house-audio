// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioController
{
    using System.Collections.Generic;
    using System.Collections.Specialized;
    using System.ComponentModel.Composition.Hosting;
    using System.ComponentModel.Composition.Primitives;
    using System.Linq;

    /// <summary>
    /// MEF Name Value Collection Export Provider.
    /// </summary>
    public class MefNameValueCollectionExportProvider : ExportProvider
    {
        /// <summary>
        /// Exports.
        /// </summary>
        private readonly List<Export> exports;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="settings">Settings</param>
        public MefNameValueCollectionExportProvider(NameValueCollection settings)
        {
            this.exports = new List<Export>();

            foreach (string key in settings)
            {
                var metadata = new Dictionary<string, object>
                {
                    {
                        CompositionConstants
                            .ExportTypeIdentityMetadataName, typeof(string)
                            .FullName
                    }
                };

                var exportDefinition = new ExportDefinition(key, metadata);

                this.exports.Add(new Export(exportDefinition, () => settings[key]));
            }
        }

        /// <summary>
        /// GetExportsCore.
        /// </summary>
        /// <param name="importDefinition">importDefinition</param>
        /// <param name="atomicComposition">atomicComposition</param>
        /// <returns>Exports</returns>
        protected override IEnumerable<Export> GetExportsCore(
            ImportDefinition importDefinition, AtomicComposition atomicComposition)
        {
            return this.exports
                .Where(x => importDefinition.IsConstraintSatisfiedBy(x.Definition));
        }
    }
}
