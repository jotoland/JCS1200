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
            /*
            int a = 56;
            int b = 29;
            int c = a+b;
            Console.WriteLine(c);
            */
            //3. 
            //Console.WriteLine(650/2);

            //4.
            //Console.WriteLine(-1 + 4 * 6);
            //Console.WriteLine(( 35 + 5) % 7);
            //Console.WriteLine( 14 + -4 * 6 / 11);
            //Console.WriteLine(2 + 5 / 6* 1- 7 % 2);
        
            //5.
            /*    
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
            */
            
            //6.
            /*

            int number1, number2, number3; 
            Console.WriteLine("Input the firt number to mulitiply:  ");
            number1 = Convert.ToInt32(Console.ReadLine());

            Console.Write("Input the second number to multiply:  ");
            number2 = Convert.ToInt32(Console.ReadLine());

            Console.Write("Inpt the third number to multiply:  ");
            number3 = Convert.ToInt32(Console.ReadLine());
           
           int result = number1 * number2 * number3; 
           Console.WriteLine("Output: {0} * {1} * {2}  = {3}",
                              number1,number2, number3, result);
            */

        //7.
        /*
        Console.Write("Enter a number: ");
        int number1= Convert.ToInt32(Console.ReadLine());

        Console.Write("Enter another number: ");
        int number2= Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("{0} + {1} = {2}", number1, number2, number1+ number2);
        Console.WriteLine("{0} - {1} = {2}", number1, number2, number1-number2);
        Console.WriteLine("{0} * {1} ={2}", number1, number2, number1 *number2);
        Console.WriteLine("{0} / {1} = {2}", number1, number2, number1/number2);
        Console.WriteLine("{0} mod {1} ={2}", number1, number2, number1%number2);
        */

        //8.
        /*
        int x;
        int result;

        Console.WriteLine("Enter a number:");
        x = Convert.ToInt32(Console.ReadLine());

        result =x*0;
        Console.WriteLine("The table is : {0} x{1} = {2}", x, 0, result);
        result=x*1;
        Console.WriteLine("             : {0} x {1} = {2}", x, 1, result);
        result=x*2;
        Console.WriteLine("             : {0} x {1} = {2}", x, 2, result);
        result=x*3;
        Console.WriteLine("             : {0} x {1} = {2}", x, 3, result);
        result=x*4;
        Console.WriteLine("             : {0} x {1} = {2}", x, 4, result);
        result=x*5;
        Console.WriteLine("             : {0} x {1} = {2}",  x, 5, result);
        result=x*6;
        Console.WriteLine("             : {0} x {1} = {2}", x, 6, result);
        result=x*7;
        Console.WriteLine("             : {0} x {1} = {2}", x, 7, result);
        result=x*8;
        Console.WriteLine("             : {0} x {1} = {2}", x, 8, result);
        result=x*9;
        Console.WriteLine("             : {0} x {1} ={2}", x, 9, result);
        result=x*10;
        Console.WriteLine("             : {0} x {1} = {2}", x, 10, result);
       */
        
        //9.
        /*
        double number1, number2, number3, number4;

        Console.Write("enter the first number:");
        number1=Convert.ToDouble(Console.ReadLine());
         Console.Write("Enter the Second number: ");
         number2=Convert.ToDouble(Console.ReadLine());
         Console.Write("Enter  the Third number: ");
         number3=Convert.ToDouble(Console.ReadLine());
         Console.Write("Enter the fourth number:");
         number4=Convert.ToDouble(Console.ReadLine());

         double result = (number1 + number2 + number3 + number4)/4;
         Console.WriteLine("The averange of {0}, {1}, {2}, {3}, is {4}",
         number1, number2, number3, number4, result); 
         */

         //10.
         /*
         //decliration of my variables
         int number1, number2, number3;
         
         //prompt the user 
         Console.Write("Enter first number-");
         // read in the line covert to int set equal to number 1
         number1=Convert.ToInt32(Console.ReadLine());

         Console.Write("Enter second number- ");
         number2= Convert.ToInt32(Console.ReadLine());

         Console.Write("Enter third number - ");
         number3= Convert.ToInt32(Console.ReadLine());

         Console.Write("Result of specified numbers {0}, {1} and {2}, (x=y)*z is {3} and x*y + y*z is {4}\n\n",
          number1, number2, number3, ((number1+number2)*number3), (number1*number2+number2*number3));
          */

        //11.
         /*
          int age;
          Console.Write("Enter your age");
          age=Convert.ToInt32(Console.ReadLine());
          Console.Write("You look younger than {0} ", age);
         */
          
         //12.
         /*
         int num;

         Console.WriteLine(" Enter a Digit: ");
         num=Convert.ToInt32( Console.ReadLine() );
         */
         //13.
         /*
         Console.Write( num );
         Console.Write(" ");
         Console.Write( num ); 
         Console.Write(" ");
         Console.Write( num );
         Console.Write(" ");
         Console.Write( num );
         Console.Write();

         
         Console.Write( num );
         Console.Write( num );
         Console.Write( num );
         Console.WriteLine( num );
         Console.WriteLine();

         
         Console.WriteLine("{0} {0} {0} {0}", num);

         
         Console.WriteLine("{0}{0}{0}{0}", num);
         */

         //14.
         /*
          Console.Write("Enter teh amount of celsius: ");
          int celsius = Convert.ToInt32(Console.ReadLine());

          Console.WriteLine("Kelvin = {0} ", celsius + 273);
          Console.WriteLine("Fahrenheit = {0}", celsius*18/ 10 + 32);
          */

          //15.
          /*
          Console.WriteLine(remove_char("w3resource", 1));
          Console.WriteLine(remove_char("w3resource",9));
          Console.WriteLine(remove_char("w3resource", 0));

        }
        public static string remove_chart(string str, int n)
        {
            return str.Remove(n,1);
            /*

         //16.
          /*
         Console.WriteLine(first_last("w3resource"));
         Console.Wrieteine(first_last)("python"));
         Console.WriteLine(firt_last("x"));
         }
         public static string first_last(string ustr)
         {
            return ustr.Length > 1
            ? ustr.Substring(ustr.length - 1) + ustr.Substring(ustr.length - 1)
            + ustr.Substring(1,ustr.Length -2) + ustr.Substring(0,1): ustr;
         */

         //17.
         
          string str;
          int l= 0;
          Console.Write("Input a string : ");
          str= Console.ReadLine();
          if (str.Length>=1)
         {
             var s= str.Substring(0,1);
             Console.WriteLine(s + str + s);
         }

         //18.

            Console.Write("Input fort integer: ");
            int x = int.Parse(Console.ReadLine());
            Console.Write("Input secod integer: ");
            int y = int.Parse(Console.ReadLine());
            bool test = (y<0 && x >= 0) || (x< 0 && y >= 0);

            Console.WriteLine($ "Check if one is negative and one in positive: {test}");

            //19.

            Console.Write("Input first integer: ");
            int x = int.Parse(Console.ReadLine());
            Console.Write("Input second integer: ");
            int y = int.Parse(Console.ReadLine());
            int result = (x == y) ? (x + y) * 3 : x + y;

            Console.WriteLine($"Result: {result}");

            //20.

            Console.Write("Input first integer: ");
            int x = int.Parse(Console.ReadLine());
            Console.Write("Input second integer : ");
            int y = int.Parse(Console.ReadLine());
            int result = (x > y) ? (x - y) * 2 ; x - y;
            
            Console.WriteLine($"Results: {result}");
            


          

         

          


        
        

        





         //13.
         /*
         int x;
          
          Console.Write("Enter a number: ");
          x=Convert.ToInt32(Console.ReadLine());

          Console.WriteLine("{0}{0{0}",x);
          Console.WriteLine("{0}{0}",x);
          Console.WriteLine("{0}{0}",x);
          Console.WriteLine("{0}{0}",x);
          Console.WriteLine("{0}{0}{0}",x);
          */
                    
        

            
            




            
        }
    }
}
