import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 合并 Tailwind CSS 类名的工具函数
 * 使用 clsx 处理条件类名，使用 tailwind-merge 解决类名冲突
 * 
 * @param inputs - 类名输入
 * @returns 合并后的类名字符串
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}