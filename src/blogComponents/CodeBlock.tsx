import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface ICodeBlock {
    code: string;
    language: string;
}

export default function CodeBlock(props: ICodeBlock) {
    return (
        <SyntaxHighlighter
            style={atomOneDark}
            language={props.language}
            customStyle={{ borderRadius: "0.5rem", display: "block" }}
            wrapLongLines={true}
        >
            {props.code}
        </SyntaxHighlighter>
    );
}
