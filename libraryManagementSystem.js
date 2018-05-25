class book
{
    constructor(bookId, departmentId){
        this.bookId = bookId;
        this.departmentId = departmentId;
    }
}

var physics = [];
var chemesitry = [];
var botany = [];
var zoology = [];

function putBooks()
{
    //Assigning physics books in the array
    for(var i = 1; i <= 10; i++)
    {
        physics.push(new book(i, 1));
    }

    //Assigning chemistry books in the array
    for(var i = 1; i <= 10; i++)
    {
        chemesitry.push(new book(i, 2));
    }

    //Assigning botany books in the array
    for(var i = 1; i <= 10; i++)
    {
        botany.push(new book(i, 3));
    }

    //Assigning zoology books in the array
    for(var i = 1; i <= 10; i++)
    {
        zoology.push(new book(i, 4));
    }

    console.clear();
    console.log("Total Physics Books: " + physics.length);
    console.log("Total Chemistry Books: " + chemesitry.length);
    console.log("Total Botany Books: " + botany.length);
    console.log("Total Zoology Books: " + zoology.length);
}

putBooks();

function borrower()
{
    var id = 1;
    
    var name = document.getElementById("name").value;
    var fatherName = document.getElementById("fathername").value;
    var bclass = document.getElementById("class").value;

    console.log("-->Borrower Details<--")
    console.log("Borrower id: " + id++);
    console.log("University id: " + 5);
    console.log("Borrower Name: " + name);
    console.log("Father Name: " + fatherName);
    console.log("Class: " + bclass);
}

function assignBook()
{
    document.querySelector('form.libraryform').addEventListener('submit', function (e){
        e.preventDefault();
    });

    alert("Open Console");
    borrower();
    var selectedDepartment = document.getElementById("department").value;
    var selectedBook = document.getElementById("book").value;

    var check1=0,check2=0,check3=0,check4=0;
    //Find Physics Book
    for(var i = 0; i < 10; i++)
    {
        if(physics[i].bookId == selectedBook && physics[i].departmentId == selectedDepartment)
        {
            console.log("Book assigned");
            console.log("Remaining Physics books: " + (physics.length - 1));
            check1 = 1;
            break;
        }
    }

    //Find Chemistry Book
    for(var i = 0; i < 10; i++)
    {
        if(chemesitry[i].bookId == selectedBook && chemesitry[i].departmentId == selectedDepartment)
        {
            console.log("Book assigned");
            console.log("Remaining Chemistry books: " + (chemesitry.length - 1));
            check2 = 1;
            break;
        }
    }

    //Find Botany Book
    for(var i = 0; i < 10; i++)
    {
        if(botany[i].bookId == selectedBook && botany[i].departmentId == selectedDepartment)
        {
            console.log("Book assigned");
            console.log("Remaining Botany books: " + (botany.length - 1));
            check3 = 1;
            break;
        }
    }

    //Find Zoology Book
    for(var i = 0; i < 10; i++)
    {
        if(zoology[i].bookId == selectedBook && zoology[i].departmentId == selectedDepartment)
        {
            console.log("Book assigned");
            console.log("Remaining Zoology books: " + (zoology.length - 1));
            check4 = 1;
            break;
        }
    }

    if(check1+check2+check3+check4 == 0)
        console.log("Book not found");
}