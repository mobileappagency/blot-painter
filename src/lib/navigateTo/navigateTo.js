// @flow
export default navigateTo = (props: object, routeName: string) => /* type : void */ {
    if (!props || !routeName) {
        throw new Error('Not enough arguments supplied: route name is required.');
    } else {
        if (Object.prototype.toString.call(props) !== '[object Object]') {
            throw new Error('Props argument must be type of object.');
        }
    
        if (Object.prototype.toString.call(routeName) !== '[object String]') {
            throw new Error('Invalid argument supplied as a navigated route.');
        }
    }
    props.navigation.navigate(routeName);
}