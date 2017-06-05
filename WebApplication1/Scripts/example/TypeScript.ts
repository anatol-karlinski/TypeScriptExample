class User {
    private name: String;
    private surname: String;
    constructor(name: String, surname: String) {
        this.name = name;
        this.surname = surname;
    };
    public GetFullName(): String {
        return (this.name + " " +  this.surname);
    }
}

function SayHello(user: User): void {
    alert("Hello, " + user.GetFullName());
}

$(document).ready(() => {
    var user: User = new User("Jan", "Nowak");
    SayHello(user);
});
