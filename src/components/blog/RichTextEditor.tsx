'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, ContentState } from 'draft-js';
import { convertToHTML, convertFromHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// Dynamically import the editor to avoid SSR issues
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
);

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
    const [editorState, setEditorState] = useState(() => {
        if (value) {
            const blocksFromHTML = convertFromHTML(value);
            const contentState = ContentState.createFromBlockArray(
                blocksFromHTML.contentBlocks,
                blocksFromHTML.entityMap
            );
            return EditorState.createWithContent(contentState);
        }
        return EditorState.createEmpty();
    });

    const handleEditorChange = (state: EditorState) => {
        setEditorState(state);
        const html = convertToHTML(state.getCurrentContent());
        onChange(html);
    };
    
    // Add table to toolbar options
    const toolbarOptions = {
        options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'embedded', 'image', 'remove', 'history', 'table'],
        inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough'],
        },
        blockType: {
            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote'],
        },
        list: {
            options: ['unordered', 'ordered'],
        },
    };

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
