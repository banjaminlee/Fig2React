

export type RadioInputProps = {
    label?: string;
    value: string;
    checked?: string;
    setter: React.Dispatch<React.SetStateAction<string>>;
    customsize?: 'Small' | 'Large';
    style?: React.CSSProperties;
    disabled?: boolean;
};