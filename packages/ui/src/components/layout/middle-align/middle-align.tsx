/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../../types'
import styles from './middle-align.css'

export type MiddleAlignProps = {
  children: ComponentChildren
}

export function MiddleAlign({
  children,
  ...rest
}: Props<HTMLDivElement, MiddleAlignProps>): JSX.Element {
  return (
    <div {...rest} class={styles.middleAlign}>
      <div class={styles.children}>{children}</div>
    </div>
  )
}
