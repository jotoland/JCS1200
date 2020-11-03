using System;

namespace CSharp_Exercises
{
    class Program
    {
        static void Main(string[] args)
        {
            // 1.
        
            //Console.WriteLine("Hello: Thomas Lindsey");

            //2.
            //Console.WriteLine(32+37);

            //3.
            //Console.WriteLine(276/4);

            //4.
            //Console.WriteLine(-1 + 4 * 6);
            //Console.WriteLine(( 35+ 5 ) % 7);
            //Console.WriteLine(14 + -4 * 6 / 11);
            //Console.WriteLine(2 + 15 / 6 * 1 - 7 % 2);
            
            //5.
              /* int number1, number2, temp;
            Console.Write("\nInput the First Number : ");
            number1 = int.Parse(Console.ReadLine());
            Console.Write("\nInput the Second Number : ");
            number2 = int.Parse(Console.ReadLine());
            temp = number1;
            number1 = number2;
            number2 = temp;
            Console.Write("\nAfter Swapping : ");
            Console.Write("\nFirst Number : "+number1);
            Console.Write("\nSecond Number : "+number2);
            Console.Read();
        
            //6
                int num1, num2, num3;
                Console.Write("Imput the first number to multiply: ");
                num1 = Convert.ToInt32(Console.ReadLine());
                Console.Write("Imput the second number to multiply: ");
                num2 = Convert.ToInt32(Console.ReadLine());
                Console.Write("imput the third number to multiply: ");
                num3 = Convert.ToInt32(Console.ReadLine());

                int  result = num1 * num2 * num3;
                Console.WriteLine("Output: {0} x {1} x {2} = {3}",
                                    num1, num2, num3, result);
           
                //7
                Console.WriteLine("Enter first number: ");
                int num1= Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Enter another number: ");
                int num2= Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("{0} + {1} = {2}", num1, num2, num1+num2);
                Console.WriteLine("{0} - {1} = {2}", num1, num2, num1-num2);
                Console.WriteLine("{0} x {1} = {2}", num1, num2, num1*num2);
                Console.WriteLine("{0} / {1} = {2}", num1, num2, num1/num2);
                Console.WriteLine("{0} mod {1} = {2}", num1, num2, num1%num2);
            

            //8

                int x;
                int result;

                Console.WriteLine("Enter a number: ");
                 x = Convert.ToInt32(Console.ReadLine());

                 result = x * 1;
                 Console.WriteLine("This tabel is: {0} * {1} = {2}", x, 1, result);
                 result = x * 2;
                 Console.WriteLine("This tabel is: {0} * {1} = {2}", x, 2, result);
                 result = x * 3;
                 Console.WriteLine("This tabel is: {0} * {1} = {2}", x, 3, result);
                 result = x * 4;
                 Console.WriteLine("This tabel is: {0} * {1} = {0}", x, 4, result);
                 result = x * 5;
                 Console.WriteLine("This tabel is: {0} * {1} = {2}", x, 5, result);
                 result = x * 6;
                 Console.WriteLine("This tabel is: {0} * {1} = {2}", x, 6, result);
                 result = x * 7;
                 Console.WriteLine("This tabel is: {0} * {1} = {2}", x, 7, result);
                 result = x * 8;
                 Console.WriteLine("This tabel is: {0} * {1} = {2}", x, 8, result);
                 result = x * 9;
                 Console.WriteLine("This tabel is: {0} * {1} = {2}", x, 9, result);
                 result = x * 10;
                 Console.WriteLine("This tabel is: {0} * {1} = {2}", x, 10, result);
            
                //9

                 double number1,number2,number3,number4;

                 Console.WriteLine("Enter the first number: ");
                 number1 = Convert.ToDouble(Console.ReadLine());
                 Console.WriteLine("Enter the second number: ");
                 number2 = Convert.ToDouble(Console.ReadLine());
                 Console.WriteLine("Enter the third number: ");
                 number3 = Convert.ToDouble(Console.ReadLine());
                 Console.WriteLine("Enter the forth number: ");
                 number4 = Convert.ToDouble(Console.ReadLine());

                 double result = (number1 + number2 + number3 + number4) /4;
                 Console.WriteLine("The average of {0}, {1}, {2}, {3} is: {4}",
                 number1, number2, number3, number4, result);
                 

                //10

                  int number1, number2, number3;
 
                     Console.Write("Enter first number - ");
                     number1 = Convert.ToInt32(Console.ReadLine());
     
                     Console.Write("Enter second number - ");
                     number2 = Convert.ToInt32(Console.ReadLine());
 
                     Console.Write("Enter third number - ");
                     number3 = Convert.ToInt32(Console.ReadLine());
 
                     Console.Write("Result of specified numbers {0}, {1} and {2}, (x+y)·z is {3} and x·y + y·z is {4}\n\n",
                    number1, number2, number3, ((number1+number2)*number3), (number1*number2+number2*number3));
                
                //11

                    int age;
                    Console.Write("Enter your age ");
                    age = Convert.ToInt32(Console.ReadLine());
                    Console.Write("You look younger than {0} ",age);

                 //12
                    int num; 
  
                    Console.WriteLine("Enter a digit: ");
                    num = Convert.ToInt32( Console.ReadLine() );
  
                // Part A: "num num num num" using Write
                    Console.Write( num );
                    Console.Write(" ");
                    Console.Write( num );
                    Console.Write(" ");
                    Console.Write( num );
                    Console.Write(" ");
                    Console.Write( num );
                    Console.WriteLine();
  
                 // Part B: "numnumnumnum" using Write
                     Console.Write( num );
                     Console.Write( num );
                     Console.Write( num );
                     Console.WriteLine( num );
                     Console.WriteLine();
  
                // Part C: "num num num num" using {0}
                     Console.WriteLine("{0} {0} {0} {0}", num);
                

                //13

                    int x;
         
                     Console.Write("Enter a number: ");
                     x=Convert.ToInt32(Console.ReadLine());
     
                     Console.WriteLine("{0}{0}{0}",x);
                     Console.WriteLine("{0} {0}",x);
                     Console.WriteLine("{0} {0}",x);
                     Console.WriteLine("{0} {0}",x);
                     Console.WriteLine("{0}{0}{0}",x);
                

                //14

                     Console.Write("Enter the amount of celsius: "); 
                     int celsius = Convert.ToInt32(Console.ReadLine());
 
                     Console.WriteLine("Kelvin = {0}", celsius + 273);
                     Console.WriteLine("Fahrenheit = {0}", celsius * 18 / 10 + 32);
                    
                

        //15

        Console.WriteLine(remove_char("w3resource", 1));
        Console.WriteLine(remove_char("w3resource", 9));
        Console.WriteLine(remove_char("w3resource", 0));     
                

        //16

        Console.WriteLine(first_last("w3resource"));
        Console.WriteLine(first_last("Python"));
        Console.WriteLine(first_last("x"));
               

        //17

        string str; 
        int l= 0;
        Console.Write("Input a string : ");
        str = Console.ReadLine();

        if (str.Length>=1){
            string s = str.Substring(0,1);
            Console.WriteLine(s + str + s); 
        }
        
                

        //18
                    
        Console.WriteLine("\nInput first integer:");  
        int x = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Input second integer:");  
        int y = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Check if one is negative and one is positive: ");
        Console.WriteLine((x < 0 && y > 0) || (x > 0 && y < 0));
          */          

        // End of main method 
        } 

        public static string remove_char(string str, int n)
        {
            return str.Remove(n, 1);
        }

        public static string first_last(string ustr)
        {
            return ustr.Length > 1
                ? ustr.Substring(ustr.Length - 1) + ustr.Substring(1, ustr.Length - 2) + ustr.Substring(0, 1) : ustr;
        }      
    }
}



