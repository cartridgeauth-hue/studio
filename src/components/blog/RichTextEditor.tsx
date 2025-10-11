'use client';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['table'],
    ],
  };

  if (!ReactQuill) {
    return <div className="bg-card rounded-md border border-input min-h-[400px] animate-pulse" />;
  }

  return (
      <div className="bg-card text-foreground">
        <ReactQuill 
            theme="snow" 
            value={value} 
            onChange={onChange} 
            modules={modules}
            className='[&_.ql-editor]:min-h-[300px]'
        />
      </div>
  );
}
