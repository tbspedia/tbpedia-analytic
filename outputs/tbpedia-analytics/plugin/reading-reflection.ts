export const REFLECTION_LIMIT = 300;
const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
const characters = (value: string) => Array.from(segmenter.segment(value), part => part.segment);
export const reflectionLength = (value: string) => characters(value).length;

// Let IMEs finish composing before limiting text; never split a visible character.
export function bindReflectionInput(input: HTMLTextAreaElement, update: (value: string, remaining: number) => void) {
  let composing = false;
  const refresh = (limit: boolean) => {
    const parts = characters(input.value);
    if (limit && parts.length > REFLECTION_LIMIT) {
      const start = input.selectionStart;
      const end = input.selectionEnd;
      input.value = parts.slice(0, REFLECTION_LIMIT).join('');
      input.setSelectionRange(Math.min(start, input.value.length), Math.min(end, input.value.length));
    }
    update(input.value, REFLECTION_LIMIT - reflectionLength(input.value));
  };
  input.addEventListener('compositionstart', () => { composing = true; });
  input.addEventListener('compositionend', () => { composing = false; refresh(true); });
  input.addEventListener('input', () => refresh(!composing));
  // Preserve older, longer reflections on opening; saving asks the reader to shorten them.
  refresh(false);
}
