import { NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

/**
 * Represents the directional positioning options and size for layout elements.
 * - `position`: Defines the positioning direction as 'top-bottom', 'left-right', or 'all'.
 * - `size`: Specifies the space size of the layout element.
 */
export interface DirectionInterface {
   position: 'top-bottom' | 'left-right' | 'all';
   size: number;
}

/**
 * Represents spacing options for layout elements.
 * - `top`: Specifies the top spacing.
 * - `bottom`: Specifies the bottom spacing.
 * - `left`: Specifies the left spacing.
 * - `right`: Specifies the right spacing.
 * - `direction`: Optional directional spacing defined by the `DirectionInterface`.
 */
export interface Spacing {
   top?: number;
   bottom?: number;
   left?: number;
   right?: number;
   direction?: DirectionInterface;
}

/**
 * Represents the navigation prop type for the application's root stack.
 * Utilizes `NativeStackScreenProps` with generics for the root stack and route parameters.
 */
export type NavigationPropType = NativeStackScreenProps<RootStackParamList, string, string>;

/**
 * Represents the stack navigation type within the application.
 * Utilizes `NavigationProp` with generics for the root stack.
 */
export type StackNavigation = NavigationProp<RootStackParamList>;

/**
 * Represents width and height customization options for layout elements.
 * - `customWidth`: Specifies a custom width for the layout element.
 * - `customHeight`: Specifies a custom height for the layout element.
 */
export interface WidthAndHeightInterface {
   customWidth?: string | number;
   customHeight?: string | number;
}

/**
 * Represents the payload interface for pagination configuration.
 */
export interface PaginationPayloadInterface {
   page?: number;
}

/**
 * Represents the interface for pagination information.
 * - `page`: Specifies the current page number.
 * - `total_pages`: Specifies the total number of pages.
 * - `total_results`: Specifies the total number of results.
 */
export interface PaginationInterface {
   page?: number;
   total_pages?: number;
   total_results?: number;
}

/**
 * Represents the interface for handling API error responses.
 * - `data`: Object containing error details.
 *    - `error`: A string representing the error type.
 *    - `message`: An array of error messages or a single error message string.
 *    - `statusCode`: A string representing the HTTP status code.
 */
export interface ApiErrorResponseInterface {
   data: {
      error: string;
      message: Array<string> | string;
      statusCode: string;
   };
}

/**
 * Represents the interface for general API responses.
 * - `success`: Indicates whether the API call was successful.
 * - `error`: Indicates whether an error occurred during the API call.
 * - `message`: Optional message providing additional information about the API response.
 */
export interface ApiResponseInterface {
   success: boolean;
   error: boolean;
   message?: string;
}

/**
 * Represents the display type for layout elements.
 */
export type DisplayType = 'inline' | 'inline-block' | 'block' | 'none' | 'flex';
/**
 * Represents the justification content type for flex containers.
 */
export type JustifyContentType = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'initial';
/**
 * Represents the alignment type for flex containers.
 */
export type AlignItemsType = 'center' | 'normal' | 'flex-start' | 'flex-end' | 'start' | 'end' | 'baseline';
/**
 * Represents the flex direction type for flex containers.
 */
export type FlexDirectionType = 'row' | 'column';
/**
 * Represents the position type for layout elements.
 */
export type PositionType = 'absolute' | 'relative' | 'static' | 'relative' | 'fixed';
