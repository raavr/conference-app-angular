import { NewsDetailResolver } from './news/news-detail/news-detail.resolver';
import { NewsListResolver } from './news/news-list/news-list.resolver';
import { SpeakerListResolver } from './speakers/speaker-list/speaker-list.resolver';
import { PartnerListResolver } from './partners/partner-list/partner-list.resolver';
import { AgendaResolver } from './agenda/full-agenda/full-agenda.resolver';
import { PresentationListResolver } from './presentations/presentation-list/presentation-list.resolver';

// an array of services to resolve routes with data
export const APP_RESOLVER_PROVIDERS = [
  NewsDetailResolver,
  NewsListResolver,
  SpeakerListResolver,
  PartnerListResolver,
  AgendaResolver,
  PresentationListResolver
];
