using System;

namespace Intro
{
    class Program
    {
        static void Main(string[] args)
        {
            var random = new Random();

            List<string> insults = new List<string>() {
                 "You look like what morning breath smells like.",
    "If you tried to give me cpr I would probably throw myself back under water",
    "I am not a fan of you",
    "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
    "I'd rather walk than be on the same plane as you",
    "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
    "Do you have to be so...like that?"
            };

   Console.WriteLine();

    //List in C# = Array in JS
   List<string> indexes = new List<string>();
   while (indexes.Count < 3) 
   {
       string candidate = random.Next(0, insults.Count - 1);
       if (!indexes.Contains(candidate)) 
       {
           indexes.Add(candidate);
       }
   }

        //.Count in C# = .length in JS
   for (int i = 0; i < indexes.Count; i++)
   {
       int index = random.Next(insults.Count);
       Console.WriteLine(insults[index]);
   }


        }
    }
}
