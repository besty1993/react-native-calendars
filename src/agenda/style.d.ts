import { Theme } from '../types';
export default function styleConstructor(theme?: Theme): {
    container: {
        flex: number;
        overflow: "hidden";
    };
    animatedContainer: {
        flex: number;
    };
    knob: import("react-native").ViewStyle;
    weekdays: import("react-native").ViewStyle;
    header: {
        overflow: "hidden";
        justifyContent: "flex-end";
        position: "absolute";
        height: string;
        width: string;
    };
    knobContainer: {
        flex: number;
        position: "absolute";
        left: number;
        right: number;
        height: number;
        bottom: number;
        alignItems: "center";
        backgroundColor: string;
    };
    dayHeader: {
        width: number;
        textAlign: "center";
        fontSize: number;
        fontFamily: string;
        fontWeight: "300" | "600" | "normal" | "bold" | "100" | "200" | "400" | "500" | "700" | "800" | "900" | undefined;
        color: string;
    };
    reservations: {
        flex: number;
        marginTop: number;
        backgroundColor: string;
    };
    scrollPadStyle: {
        position: "absolute";
        width: string;
        alignSelf: "center";
    };
};
