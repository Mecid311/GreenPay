export type ScrollWordItem = {
  text?: string;
  italic?: boolean;
  align?: "left" | "right";
  stable?: boolean;
};

export type NormalizedScrollWordItem = {
  text: string;
  italic: boolean;
  align: "left" | "right";
  stable: boolean;
};

export type ScrollWordsResponse = {
  words?: ScrollWordItem[];
  scrollHintText?: string;
};

export const defaultScrollWordsContent: {
  words: NormalizedScrollWordItem[];
  scrollHintText: string;
} = {
  words: [
    { text: "SADƏ", italic: false, align: "left", stable: false },
    { text: "SÜRƏTLİ", italic: true, align: "right", stable: false },
    { text: "TƏHLÜKƏSİZ", italic: false, align: "left", stable: false },
  ],
  scrollHintText: "Scroll",
};