export class Livro {
    isbn:string;
    title:string;
    authors: [string];
    description: string;
    subjects: [string];
    publishDate: string;

    

    constructor(isbn:string, title:string, authors:[string], description: string, subjects: [string], publishDate: string) {
        this.isbn = isbn;
        this.title = title;
        this.authors = authors;
        this.description = description;
        this.subjects = subjects;
        this.publishDate = publishDate;     
    }

}

