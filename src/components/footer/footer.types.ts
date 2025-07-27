import { SocialMediaItem } from '../../interfaces';

export interface FooterProps {
  bottomBarText: string;
  highlightedText: string;
  logo: string;
  socials: SocialMediaItem[];
  supportingText: string;
  className?: string;
}
