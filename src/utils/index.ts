//把驼峰转换成横杠连接
export const toLine = (value:String) =>{
    return value.replace(/(A-Z)g/,'-$1').toLocaleLowerCase();
}