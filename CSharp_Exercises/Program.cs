using System;

namespace CSharp_Exercises
{
    class Program
    {
        static void Main(string[] args)
        {
            // 1.
            //Console.WriteLine("Hello: Taylor Lindsey");

            // 2.
            //Console.WriteLine(56+29);

            //3. 
            //Console.WriteLine(650/2);

            //4.
            //Console.WriteLine(-1 + 4 * 6);
            //Console.WriteLine(( 35 + 5) % 7);
            //Console.WriteLine( 14 + -4 * 6 / 11);
            //Console.WriteLine(2 + 5 / 6* 1- 7 % 2);
        
            //5.
                int number1, number2, temp;
            Console.Write("\nInput the First number : ");
            number1 = int.Parse(Console.ReadLine());
            Console.Write("\nInput the Second Number : ");
            number2 = int.Parse(Console.ReadLine());
            temp = number1;
            number1 = number2;
            number2 = temp;
            Console.WriteLine("\nAfter Swapping : ");
            Console.WriteLine("\nFirst Number : "+number1);
            Console.WriteLine("\nSecond Number : "+number2);
            Console.Read();
            




            
        }
    }
}
