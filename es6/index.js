var fn = () => {
    console.log(111222333)
}
fn();

class publick{
    hello(){
        console.log("hrllo")
    }
}

var s = new publick;

s.hello();

class leo extends publick{

}

var l = new leo;
l.hello();