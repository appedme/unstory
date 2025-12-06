"use client";

import React from "react";
import { Plate, usePlateEditor } from "platejs/react";
import { BasicNodesKit } from "@/components/editor/plugins/basic-nodes-kit";
import { Editor as PlateEditorUI, EditorContainer } from "@/components/ui/editor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const initialValue = [
    {
        id: '1',
        type: 'p',
        children: [{ text: 'Start writing your story...' }],
    },
];

export default function Editor({ onChange }: { onChange?: (value: any) => void }) {
    const editor = usePlateEditor({
        plugins: BasicNodesKit,
        value: initialValue,
        onChange: (newValue) => {
            onChange?.(newValue.value);
        }
    });

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="min-h-[500px]">
                <Plate editor={editor}>
                    <EditorContainer>
                        <PlateEditorUI variant="default" placeholder="Type..." />
                    </EditorContainer>
                </Plate>
            </div>
        </DndProvider>
    );
}
