import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import '../../style/RichTextEditor.css'; 

const RichTextEditor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="rich-text-editor">
      <div className="editor-toolbar">
        <button onClick={() => editor.chain().focus().toggleBold().run()}>Gras</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>Italique</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>Titre</button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>Liste</button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}>Reset</button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;