import { ScaleBandSpec, ScaleSpec } from '@nivo/scales'
import { defaultAxisProps } from '@nivo/axes'
import { InheritedColorConfig, OrdinalColorScaleConfig } from '@nivo/colors'
import { BarCanvasLayerId, BarLayerId, ComputedDatum } from './types'
import { BarItem } from './BarItem'
import { BarTooltip } from './BarTooltip'

export const defaultProps = {
    indexBy: 'id',
    keys: ['value'],
    groupMode: 'stacked' as const,
    layout: 'vertical' as const,
    reverse: false,
    minValue: 'auto' as const,
    maxValue: 'auto' as const,
    valueScale: { type: 'linear' } as ScaleSpec,
    indexScale: { type: 'band', round: true } as ScaleBandSpec,
    padding: 0.1,
    innerPadding: 0,
    axisTop: null,
    axisRight: null,
    axisBottom: defaultAxisProps,
    axisLeft: defaultAxisProps,
    enableGridX: false,
    enableGridY: true,
    enableLabel: true,
    label: 'formattedValue',
    labelPosition: 'middle' as const,
    labelOffset: 0,
    labelSkipWidth: 0,
    labelSkipHeight: 0,
    labelTextColor: { theme: 'labels.text.fill' },
    colorBy: 'id' as const,
    colors: { scheme: 'nivo' } as OrdinalColorScaleConfig,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: { from: 'color' } as InheritedColorConfig<any>,
    isInteractive: true,
    tooltip: BarTooltip,
    tooltipLabel: <RawDatum>(datum: ComputedDatum<RawDatum>) => `${datum.id} - ${datum.indexValue}`,
    legends: [],
    initialHiddenIds: [],
    annotations: [],
    markers: [],
    enableTotals: false,
    totalsOffset: 10,
}

export const svgDefaultProps = {
    ...defaultProps,
    layers: ['grid', 'axes', 'bars', 'totals', 'markers', 'legends', 'annotations'] as BarLayerId[],
    barComponent: BarItem,
    defs: [],
    fill: [],
    animate: true,
    motionConfig: 'default',
    role: 'img',
    isFocusable: false,
}

export const canvasDefaultProps = {
    ...defaultProps,
    layers: ['grid', 'axes', 'bars', 'totals', 'legends', 'annotations'] as BarCanvasLayerId[],
    pixelRatio: typeof window !== 'undefined' ? (window.devicePixelRatio ?? 1) : 1,
}
