import { DimensionValue, ImageSourcePropType } from "react-native";

export interface PropsButton{
    nome?: string;
    image?: ImageSourcePropType;
    backgroundColorPerso?: string;
    widthPerso?: DimensionValue;
    onlyImage: boolean;
    textColor?: string;
    localB?: number;
    localL?: number;
    position?: "absolute" | "relative" | "static" | undefined;
    cBorder?: string;
    tBorder?: number;
    icon?: any;
}