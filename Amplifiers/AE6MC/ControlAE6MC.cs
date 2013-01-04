// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.Amplifier.AE6MC
{
    using System;
    using System.ComponentModel.Composition;
    using System.Linq;
    using System.Threading.Tasks;

    /// <summary>
    /// Controls the AE6MC.
    /// </summary>
    [Export]
    public class ControlAE6MC
    {
        /// <summary>
        /// Communication protocol
        /// </summary>
        private ICommunication communication;

        /// <summary>
        /// Control Constructor
        /// </summary>
        /// <param name="communication">Communication class</param>
        [ImportingConstructor]
        internal ControlAE6MC(ICommunication communication)
        {
            var enumerable = Enumerable.Range(1, AE6MC.NumberOfZones);
            this.communication = communication;
        }

        /// <summary>
        /// Gets the version of the amplifier.
        /// </summary>
        /// <returns>Amplifier version</returns>
        public async Task<string> GetVersion()
        {
            await this.communication.Write("(vr?)");
            return await this.communication.Read();
        }

        /// <summary>
        /// Resets the amplifier.
        /// </summary>
        /// <returns>Async</returns>
        public async Task Reset()
        {
            await this.communication.Write("(rx)");
        }

        /// <summary>
        /// Turns on or off a zone.
        /// </summary>
        /// <param name="id">Zone</param>
        /// <param name="on">On or off</param>
        /// <returns>Async</returns>
        [System.Diagnostics.CodeAnalysis.SuppressMessage("StyleCop.CSharp.MaintainabilityRules", "SA1119:StatementMustNotUseUnnecessaryParenthesis", Justification = "Bug in Stylecop. The parenthesis is needed"),
        System.Diagnostics.CodeAnalysis.SuppressMessage("StyleCop.CSharp.SpacingRules", "SA1008:OpeningParenthesisMustBeSpacedCorrectly", Justification = "Bug in Stylecop. The parenthesis is good")]
        public async Task SetOn(string id, bool on)
        {
            await (on ?
                this.communication.Write("(" + id + "on)") :
                this.communication.Write("(" + id + "of)"));
        }

        /// <summary>
        /// Mutes or unmutes a zone.
        /// </summary>
        /// <param name="id">Zone</param>
        /// <param name="mute">Muted (true) or Unmuted (false)</param>
        /// <returns>Async</returns>
                [System.Diagnostics.CodeAnalysis.SuppressMessage("StyleCop.CSharp.MaintainabilityRules", "SA1119:StatementMustNotUseUnnecessaryParenthesis", Justification = "Bug in Stylecop. The parenthesis is needed"),
        System.Diagnostics.CodeAnalysis.SuppressMessage("StyleCop.CSharp.SpacingRules", "SA1008:OpeningParenthesisMustBeSpacedCorrectly", Justification = "Bug in Stylecop. The parenthesis is good")]
        public async Task SetMute(string id, bool mute)
        {
            await (mute ?
                this.communication.Write("(" + id + "mu)") :
                this.communication.Write("(" + id + "um)"));
        }

        /// <summary>
        /// Mutes all the zones.
        /// </summary>
        /// <param name="mute">Muted (true) or Unmuted (false)</param>
        /// <returns>Async</returns>
                [System.Diagnostics.CodeAnalysis.SuppressMessage("StyleCop.CSharp.MaintainabilityRules", "SA1119:StatementMustNotUseUnnecessaryParenthesis", Justification = "Bug in Stylecop. The parenthesis is needed"),
        System.Diagnostics.CodeAnalysis.SuppressMessage("StyleCop.CSharp.SpacingRules", "SA1008:OpeningParenthesisMustBeSpacedCorrectly", Justification = "Bug in Stylecop. The parenthesis is good")]
        public async Task MuteAll(bool mute)
        {
            await (mute ?
                this.communication.Write("(amu)") :
                this.communication.Write("(aum)"));
        }

        /// <summary>
        /// Gets the volume for a specific zone.
        /// </summary>
        /// <param name="id">Zone</param>
        /// <returns>Volume from 0 to 100</returns>
        public async Task<int> GetVolume(string id)
        {
            await this.communication.Write("(" + id + "vl?)");
            string result = await this.communication.Read();
            int finalResult;
            if (!int.TryParse(result, out finalResult))
            {
                return -1;
            }

            return finalResult * 100 / 87;
        }

        /// <summary>
        /// Sets the volume for the zone.
        /// </summary>
        /// <param name="id">Zone</param>
        /// <param name="value">Volume from 0 to 100</param>
        /// <returns>Async</returns>
        public async Task SetVolume(string id, int value)
        {
            // Our value goes from 0 to 87
            await this.communication.Write("(" + id + "vl" + (value * 87 / 100).ToString("D2") + ")");
        }

        /// <summary>
        /// Gets the bass for the zone.
        /// </summary>
        /// <param name="id">Zone</param>
        /// <returns>Bass from 0 to 100</returns>
        public async Task<int> GetBass(string id)
        {
            await this.communication.Write("(" + id + "b?)");
            return Convert.ToInt32(await this.communication.Read(), 16);
        }

        /// <summary>
        /// Sets the bass for the zone.
        /// </summary>
        /// <param name="id">Zone</param>
        /// <param name="value">Bass from 0 to 100</param>
        /// <returns>Async</returns>
        public async Task SetBass(string id, int value)
        {
            await this.communication.Write("(" + id + "b" + value.ToString("X") + ")");
        }

        /// <summary>
        /// Gets the treble for the zone.
        /// </summary>
        /// <param name="id">Zone</param>
        /// <returns>Treble from 0 to 100</returns>
        public async Task<int> GetTreble(string id)
        {
            await this.communication.Write("(" + id + "t?)");
            return Convert.ToInt32(await this.communication.Read(), 16);
        }

        /// <summary>
        /// Sets the treble for the zone.
        /// </summary>
        /// <param name="id">Zone</param>
        /// <param name="value">Treble from 0 to 100</param>
        /// <returns>Async</returns>
        public async Task SetTreble(string id, int value)
        {
            await this.communication.Write("(" + id + "t" + value.ToString("X") + ")");
        }

        /// <summary>
        /// Links zone to an input.
        /// </summary>
        /// <param name="id">Zone</param>
        /// <param name="input">Input</param>
        /// <returns>Async</returns>
        public async Task SetLink(string id, string input)
        {
            await this.communication.Write("(" + id + "sl" + input + ")");
        }
    }
}