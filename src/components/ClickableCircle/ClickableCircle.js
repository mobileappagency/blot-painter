import React from 'react';
import { TouchableOpacity } from 'react-native';

type Props = {
    styles: object,
    props: object
}

export default function ClickableCircle (props: Props) {
    return (
        <TouchableOpacity>
            {props.fillElement}
        </TouchableOpacity>
    );
}