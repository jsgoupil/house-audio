using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HouseAudio.AudioBase
{
    public class Input
    {
        public string Id { get; set; }

        public override bool Equals(object obj)
        {
            // If parameter is null return false.
            if (obj == null)
            {
                return false;
            }

            // If parameter cannot be cast to Input return false.
            Input i = obj as Input;
            if ((System.Object)i == null)
            {
                return false;
            }

            // Return true if the fields match:
            return i.Id == Id;
        }

        public override int GetHashCode()
        {
            return Id.GetHashCode();
        }
    }
}