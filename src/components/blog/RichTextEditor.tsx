'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, ContentState, convertToHTML, convertFromHTML } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import type { EditorProps } from 'react-draft-wysiwyg';

// Dynamically import the editor to avoid SSR issues
const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
);

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
    const [editorState, setEditorState] = useState<EditorState | undefined>(undefined);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // This ensures the component only renders on the client
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            // Initialize editorState only when on the client and it hasn't been set
            if (!editorState) {
                if (value) {
                    const blocksFromHTML = convertFromHTML(value);
                    if (blocksFromHTML.contentBlocks) {
                        const contentState = ContentState.createFromBlockArray(
                            blocksFromHTML.contentBlocks,
                            blocksFromHTML.entityMap
                        );
                        setEditorState(EditorState.createWithContent(contentState));
                    } else {
                        setEditorState(EditorState.createEmpty());
                    }
                } else {
                    setEditorState(EditorState.createEmpty());
                }
            }
        }
    }, [isClient]);

    const handleEditorChange = (state: EditorState) => {
        setEditorState(state);
        const html = convertToHTML(state.getCurrentContent());
        onChange(html);
    };
    
    // Add table to toolbar options
    const toolbarOptions = {
        options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
        inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
        },
        blockType: {
            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
        },
        list: {
            options: ['unordered', 'ordered', 'indent', 'outdent'],
        },
        textAlign: {
            options: ['left', 'center', 'right', 'justify'],
        },
        image: {
            uploadEnabled: true,
            alt: { present: true, mandatory: false },
        },
    };

    if (!isClient || editorState === undefined) {
        return <div className="bg-card rounded-md border border-input min-h-[400px] animate-pulse" />;
    }

    return (
        <div className="bg-card rounded-md border border-input">
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                toolbarClassName="toolbar-class !border-0 !border-b !border-input !rounded-t-md"
                wrapperClassName="wrapper-class"
                editorClassName="editor-class !px-4 !min-h-[300px]"
                toolbar={toolbarOptions}
            />
        </div>
    );
}
