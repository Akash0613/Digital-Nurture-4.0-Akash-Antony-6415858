using System;

interface IDocument
{
    void create();
}

abstract class DocumentFactory
{
    public abstract IDocument CreateDocument();
}

class WordDocument : IDocument
{
    public void create()
    {
        Console.WriteLine("Created Word Document...");
    }
}

class PdfDocument : IDocument
{
    public void create()
    {
        Console.WriteLine("Created PDF Document...");
    }
}

class ExcelDocument : IDocument
{
    public void create()
    {
        Console.WriteLine("Created Excel Document...");
    }
}

class WordFactory : DocumentFactory
{
    public override IDocument CreateDocument()
    {
        return new WordDocument();
    }
}

class PdfFactory : DocumentFactory
{
    public override IDocument CreateDocument()
    {
        return new PdfDocument();
    }
}

class ExcelFactory : DocumentFactory
{
    public override IDocument CreateDocument()
    {
        return new ExcelDocument();
    }
}

class Program
{
    static void Main(string[] args)
    {
        DocumentFactory wordFactory = new WordFactory();
        IDocument word = wordFactory.CreateDocument();
        word.create();

        DocumentFactory pdfFactory = new PdfFactory();
        IDocument pdf = pdfFactory.CreateDocument();
        pdf.create();

        DocumentFactory excelFactory = new ExcelFactory();
        IDocument excel = excelFactory.CreateDocument();
        excel.create();
    }
}
