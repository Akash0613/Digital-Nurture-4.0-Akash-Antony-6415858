using System;

class Logger
{
    private static Logger? instance;

    private Logger()
    {
        Console.WriteLine("Logger Initialized");
    }

    public static Logger GetInstance()
    {
        if (instance == null)
        {
            instance = new Logger();
        }
        return instance;
    }

    public void Log(string message)
    {
        Console.WriteLine($"[LOG]: {message}");
    }
}

class SingletonPattern
{
    static void Main(string[] args)
    {
        Logger logger1 = Logger.GetInstance();
        logger1.Log("Akash started the app.");

        Logger logger2 = Logger.GetInstance();
        logger2.Log("Akash clicked something.");

        Console.WriteLine($"Is logger1 same as logger2? {logger1 == logger2}");
    }
}
