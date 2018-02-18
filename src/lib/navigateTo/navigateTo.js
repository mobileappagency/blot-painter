// @flow
export default navigateTo = (routeName: string) /* : function */ => {
    if (Object.prototype.toString.call(routeName) !== '[object String]') {
        throw new Error('Invalid argument supplied as a navigated route.');
    }
    return routeName;
}