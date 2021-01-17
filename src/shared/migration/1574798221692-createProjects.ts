import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Project } from '../../projects/project.entity';
import { Category } from '../../categories/category.entity';
import { Tag } from '../../tags/tag.entity';
import { Company } from '../../admin-features/companies/company.entity';
import { BaseExceptionFilter } from '@nestjs/core';

export class createProjects1574798221692 implements MigrationInterface {
  private categoryRepository = getRepository(Category);
  private companyRepository = getRepository(Company);
  private projectRepository = getRepository(Project);
  private tagRepository = getRepository(Tag);
  public async up(queryRunner: QueryRunner): Promise<any> {
    let webProjects: Object = '';
    let projects: Object[] = [
      {
        categoryName: 'web site',
        nameList: [
          {
            name: 'Ngaous',
            description: {
              ar:
                '<p><span dir="RTL">مصبرات <strong>نقاوس</strong> - رائد المنتوج الطبيعي، ويتكون من وحدتين الإنتاج؛ <strong>وحدة نقاوس <strong>و</strong>&nbsp;وحدة مينا</strong>، هي من أقدم الشركات الجزائرية السباقة في ميدانها، متخصصة في تحويل</span></p><p><span dir="RTL">&nbsp;الفواكه إنتاج وتسويق المياه الثمرية والعصائر والمصبرات</span>&nbsp;&nbsp;</p><p><span dir="RTL">تقع الشركة بمنطقة نقاوس بولاية باتنة شرق الجزائر وهي منطقة فلاحية معروفة بغزارة إنتاجها لفاكهة المشمش</span></p><p><span dir="RTL">فتحت الشركة أبوابها سنة <strong>1979</strong> على إثر عقد مع شركة <strong>سيفال</strong>&nbsp;</span><span dir="RTL">ال</span><span dir="RTL">فرنسية &nbsp;&nbsp;</span></p><p>&nbsp; <strong>ENAJUC</strong>&nbsp;<span dir="RTL">كانت بداية الإنتاج سنة <strong>1989</strong> تحت إشراف الشركة الوطنية للعصائر والمصبرات&nbsp;</span>&nbsp;</p><p><span dir="RTL">&nbsp;في إطار إعادة هيكلة لها فأصبحت كيانا قائما بذاتها في <strong>01/01/ 1998</strong></span><strong>ENAJUC</strong>&nbsp;<span dir="RTL">استقلت المؤسسة عن مجمع</span></p><p>&nbsp;<span dir="RTL">تستقى منتجات نقاوس من فاكهة المشمش الطبيعية العطرة والغنية بحلاوتها فهي تنتقى من أجود ما في بساتين نقاوس ومينة مما يعطي لرحيقها ذلك الذوق المميز في جودته</span>&nbsp;</p>',
              en:
                'N’gaous - Conserves, the leader in natural products, Composed of two production units; the N’gaous unit and the Menaa unit, it is among the former Algerian companies, specialized in fruit processing, manufacturing and marketing of fruit waters, juices and drinks; preserves, located in N’gaous, in the Wilaya of Batna in the east of Algeria, an agricultural region, rich in apricot production, its creation was in 1979 by a contract signed with the French company CIFAL, 1981 was the first year of production, under the supervision of the ENAJUC group. (Entreprise Nationale des Jus et Conserves). On 01/01/1998, the company was restructured as part of the spin-off of the parent company ENAJUC to become N’gaous - Conserves. It was privatized on 17/02/2007, and is currently 100% owned by the MAAZOUZ Group. The N’GAOUS range of products is made from the fragrant and naturally sugar-rich apricots carefully selected from the N’GAOUS and MENAA orchards, which makes the N’GAOUS apricot nectar so particularly good and unique.',
              fr:
                'N’gaous – Conserves, le leader du naturel, Composée de deux unités de production ; unité de N’gaous et l’unité de Menaa, elle est parmi les anciennes entreprises algériennes, spécialisées dans la transformation des fruits, fabrication et commercialisation des eaux fruitées, jus &amp; conserves, située à N’gaous, à la Wilaya de Batna à l’est de l’Algérie, une région agricole, riche de sa production d’abricot, sa création était en 1979 par un contrat signé avec la société française CIFAL, 1981 était la première année de production, sous la tutelle du groupe ENAJUC. (Entreprise Nationale des Jus et Conserves). Le 01/01/1998, l’entreprise a été restructurée dans le cadre de la filialisation de la société mère ENAJUC pour devenir N’gaous – Conserves. Privatisée le 17/02/2007, et actuellement elle est détenue à 100% par le Groupe MAAZOUZ. La gamme de produits N’GAOUS est issue des abricot parfumé et naturellement riche en sucre soigneusement sélectionner dans les vergers de N’GAOUS et MENAA ce qui rend le nectar d’abricot N’GAOUS si particulièrement bon et unique.',
            },
            tags: [
              'joomla',
              'bootstrap',
              'greensock',
              'k2',
              'fontawesome',
              'parallax',
              'jquery',
              'responsive',
            ],
            company: 'Dypix',
            link:'https://ngaous.com'
          },
          {
            name: 'Ramy Food',
            description: {
              ar:
                'TAIBA FOOD COMANY (TFC) هي شركة جزائرية خاصة ولدت في عام 2007 من شركة DELICE FOOD COMPANY (DFC) التي بدأت نشاطها في عام 2005. تعمل TFC في مجال المنتجات الغذائية بشكل أكثر تحديداً في مجال إنتاج المشروبات غير الكحولية. تتخصص TFC في إنتاج وتوزيع المشروبات غير الكحولية ، أي عصائر الفاكهة والمشروبات الغازية ومشروبات الطاقة تحت علامة RAMY التجارية. يقع موقع الإنتاج في منطقة الرويبة الصناعية بالجزائر العاصمة ، والتي تبين أنها منطقة استراتيجية لتوريد المواد الخام وكذلك لتوزيع المنتج النهائي على الأراضي الوطنية.',
              en:
                'N’gaous - Conserves, the leader in natural products, Composed of two production units; the N’gaous unit and the Menaa unit, it is among the former Algerian companies, specialized in fruit processing, manufacturing and marketing of fruit waters, juices and drinks; preserves, located in N’gaous, in the Wilaya of Batna in the east of Algeria, an agricultural region, rich in apricot production, its creation was in 1979 by a contract signed with the French company CIFAL, 1981 was the first year of production, under the supervision of the ENAJUC group. (Entreprise Nationale des Jus et Conserves). On 01/01/1998, the company was restructured as part of the spin-off of the parent company ENAJUC to become N’gaous - Conserves. It was privatized on 17/02/2007, and is currently 100% owned by the MAAZOUZ Group. The N’GAOUS range of products is made from the fragrant and naturally sugar-rich apricots carefully selected from the N’GAOUS and MENAA orchards, which makes the N’GAOUS apricot nectar so particularly good and unique.',
              fr:
                'TAIBA FOOD COMANY (TFC) est une entreprise algérienne privée issue en 2007 de l’entreprise DELICE FOOD COMPANY (DFC) laquelle a débuté son activité en 2005. TFC opère dans le domaine des produits agroalimentaires plus exactement dans le domaine de la production des boissons non alcoolisées. TFC est spécialisée dans la production et la distribution des boissons non alcoolisées à savoir les jus de fruit, boissons gazeuses et boissons énergétiques sous la marque RAMY. Le site de production est implanté au niveau de la zone industrielle de Rouïba à Alger qui s’avère être une zone stratégique pour l’approvisionnement en matière première ainsi que pour la distribution du produit fini sur le territoire national',
            },
            tags: [
              'joomla',
              'bootstrap',
              'k2',
              'fontawesome',
              'jquery',
              'responsive',
              'caroufredsel',
              'animatecss',
            ],
            company: 'Dypix',
            link:'https://ramyfood.com'
          },
          {
            name: 'Bridgestone Algérie',
            description: {
              ar:
                'تأسست في عام 1931 على يد Shōjirō Ishibashi في Kurume باليابان ، أخذت الشركة المصنعة للإطارات ذات المستوى العالمي اسمها من مؤسسها. Ishibashi يعني جسر الحجر باللغة اليابانية.',
              en:
                'Founded in 1931 by Shōjirō Ishibashi in Kurume, Japan, this world-class tire manufacturer originally took its name from its founder. Ishibashi means stone bridge in Japanese.',
              fr:
                'Fondé en 1931 par Shōjirō Ishibashi à Kurume au Japon, ce manufacturier de pneumatiques d’envergure mondiale a emprunté, à l’origine, son nom de son fondateur. Ishibashi signifie pont de pierre en japonais.',
            },
            tags: [
              'joomla',
              'bootstrap',
              'greensock',
              'k2',
              'fontawesome',
              'parallax',
              'jquery',
              'responsive',
            ],
            company: 'Dypix',
            link:'https://globalaxis.com'
          },
        ],
      },
      {
        categoryName: 'Web Application',
        nameList: [
          {
            name: 'B2B Brandt france',
            description: {
              ar:
                'تطبيق الأعمال التجارية لكبار تجار التجزئة في مجموعة brandt الفرنسية',
              en:
                'The business-to-business application for the major retailers of the French Brandt Group France',
              fr:
                'L‘application business to business pour les grands distributeur du groupe français Brandt France',
            },
            tags: [
              'springboot',
              'java',
              'Restfull',
              'sqlserver',
              'redis',
              'flyway',
              'jpa',
              'gitlab',
              'vuejs',
              'vuetify',
              'parallax',
              'nodejs',
            ],
            company: 'Brandt france',
            link:null
          },
        ],
      },
      {
        categoryName: 'Web Application',
        nameList: [
          {
            name: 'Import/Export management',
            description: {
              ar:
                'تطبيق إدارة الاستيراد / التصدير لإدارة الشؤون المالية في قطب صناعة Cevital Group',
              en:
                'The import/export file management application for the finance department of the Cevital Group‘s industry division.',
              fr:
                'L‘application de gestion des dossiers import/export pour la direction des finances du pole industrie de Ceviatl Group',
            },
            tags: [
              '.net',
              'c#',
              'sqlserver',
              'git',
              'entityframework',
              'javascript',
              'jquery',
              'animatecss',
            ],
            company: 'Cevital Group',
            link:null
          },
        ],
      },
      {
        categoryName: 'Web Application',
        nameList: [
          {
            name: 'Appliance purchasing management',
            description: {
              ar:
                'تطبيق إدارة شراء الأجهزة المنزلية لجميع موظفي الخطوط الجوية الجزائرية',
              en:
                'The application of household appliances purchase management for all employees of Algeria airlines',
              fr:
                'L‘application de gestion des gestion d‘achat électroménagers pour lensemble des employé d‘Air Algérie',
            },
            tags: [
              'jsf',
              'java',
              'sqlserver',
              'svn',
              'eclipselink',
              'jpa',
              'jquery',
              'animatecss',
            ],
            company: 'Air Algérie',
            link:null
          },
        ],
      },
    ];
    try {
      for (const project of projects) {
        await this.createProject(project);
      }
    } catch (error) {
      throw error;
    }
  }
  async createProject(project: any): Promise<any> {
    console.log('%c⧭', 'color: #0088cc', "======= createProject begin ===== ");

    let category = new Category();
    let categories: Category[];

    // let categoryNameObj = { name: project.categoryName };
    // category = await this.categoryRepository.findOneOrFail({ where: { categoryNameObj } });
    categories = await this.categoryRepository.find({
      where: { name: project.categoryName },
    });

    if (categories[0]) {
      category = categories[0];
    } else {
      category.name = project.categoryName;
      category.createdAt = category.updatedAt = new Date();
      await this.categoryRepository.save(category);
    }

    
    for (let prj of project.nameList) {
      let company = new Company();
      let companies: Company[];
      companies = await this.companyRepository.find({
        where: { name: prj.company },
      });
      if (companies[0]) {
        company = companies[0];
      } else {
            throw BaseExceptionFilter
      }
      let project = new Project();
      let tags: Tag[] = [];
      project.category = category;
      project.name = prj.name;
      project.description = prj.description.en;
      project.createdAt = project.updatedAt = new Date();
      project.company = company;
      project.beginDate = project.endDate = new Date();
      for (let tagName of prj.tags) {
        let tag = new Tag();
        let findedTags: Tag[] = [];
        // let tagNameObj = { name: tagName };
        findedTags = await this.tagRepository.find({
          where: { hashtag: tagName },
        });
        if (findedTags[0]) {
          tag = findedTags[0];
        } else {
          console.log('%c⧭ the tag  is 💩💩:', 'color: #00a3cc', tag);
          tag.createdAt = tag.updatedAt = new Date();
          tag.name = tagName;
          // await this.tagRepository.save(tag);
        }
        console.log(`%c⧭ the tag  is 🦄 ${tagName}: `, 'color: #00a3cc', tag);
        tags.push(tag);
      }
      // await prj.tags.forEach(async (tagName: string) => {
      // });
      project.tags = tags;
      await this.projectRepository.save(project);
    }
    // await project.nameList.forEach(async (prj: any) => {
        console.log('%c⧭', 'color: #0088cc', "======= createProject end ===== ");

    // })
  }
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
