"use client";

import React from "react";
import { Plate, PlateContent } from "@udecode/plate/react";
import { BaseParagraphPlugin } from "@udecode/plate-paragraph";
import { BaseHeadingPlugin } from "@udecode/plate-heading";
import { BaseBlockquotePlugin } from "@udecode/plate-block-quote";
import { BaseListPlugin, BaseTodoListPlugin } from "@udecode/plate-list";
import { BaseLinkPlugin } from "@udecode/plate-link";
import { BaseImagePlugin } from "@udecode/plate-image";
import { BaseBoldPlugin, BaseItalicPlugin, BaseUnderlinePlugin, BaseStrikethroughPlugin, BaseCodePlugin } from "@udecode/plate-basic-marks";
import { createPlatePlugin } from "@udecode/plate-core";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const plugins = [
    createPlatePlugin(BaseParagraphPlugin),
    createPlatePlugin(BaseHeadingPlugin),
    createPlatePlugin(BaseBlockquotePlugin),
    createPlatePlugin(BaseListPlugin),
    createPlatePlugin(BaseTodoListPlugin),
    createPlatePlugin(BaseLinkPlugin),
    createPlatePlugin(BaseImagePlugin),
    createPlatePlugin(BaseBoldPlugin),
    createPlatePlugin(BaseItalicPlugin),
    createPlatePlugin(BaseUnderlinePlugin),
    createPlatePlugin(BaseStrikethroughPlugin),
    createPlatePlugin(BaseCodePlugin),
];

const initialValue = [
    {
        id: '1',
        type: 'p',
        children: [{ text: 'Start writing your story...' }],
    },
];

export default function Editor({ onChange }: { onChange?: (value: any) => void }) {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="min-h-[500px] border rounded-md p-4">
                <Plate
                    plugins={plugins}
                    initialValue={initialValue}
                    onChange={(newValue) => {
                        onChange?.(newValue);
                    }}
                >
                    <PlateContent placeholder="Type..." className="outline-none" />
                </Plate>
            </div>
        </DndProvider>
    );
}
