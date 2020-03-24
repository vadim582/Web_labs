// 2 task
const findStr = (str1) => {
    let strObj = 'Vovan loves his PC';
    strObj = strObj.split(' ');
    str1 = str1.split(' ');
    //console.log(str1)
    for (let i = 0; i <= str1.length; i++) {
        if (str1[i] == strObj[i] ) {
            console.log('Success :)');
            
        } else {
            console.log('Fail :(');
        }
        return strObj;
    }
    
};

let res = 'Vovan';
findStr(res);