import { ChangeEvent, RefObject } from 'react';

export function presentOrNot(
  e: ChangeEvent<HTMLInputElement>,
  endDateRef: RefObject<HTMLInputElement>,
  textRef: RefObject<HTMLHeadingElement>,
) {
  if (e.target.checked) {
    if (endDateRef.current) endDateRef.current.style.display = 'none';
    if (textRef.current) textRef.current.style.display = 'block';
  } else {
    if (endDateRef.current) endDateRef.current.style.display = 'block';
    if (textRef.current) textRef.current.style.display = 'none';
  }
}
