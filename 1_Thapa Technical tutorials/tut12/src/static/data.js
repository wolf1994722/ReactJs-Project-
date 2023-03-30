const date = new Date();
let hr = date.getHours(), str;

if(12 <= hr && hr <= 19) str = 'Good Afternoon'
else if(19 < hr && hr <= 24) str = 'Good Night'
else str = 'Good Morning';

const obj = {
    wish : str,
    hr : hr,
}

export default obj