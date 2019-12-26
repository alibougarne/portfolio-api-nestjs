import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Project } from "src/projects/project.entity";
import { Category } from "src/categories/category.entity";
import { Tag } from "src/tags/tag.entity";

export class createProjects1574798221692 implements MigrationInterface {
    private categoryRepository = getRepository(Category);
    private projectRepository = getRepository(Project);
    private tagRepository = getRepository(Tag);
    public async up(queryRunner: QueryRunner): Promise<any> {
        let webProjects: Object = "";
        let projects: Object[] = [
            {
                categoryName: 'web sites',
                nameList: [
                    {
                        name: 'Ngaous',
                        description: 'N’gaous – Conserves, le leader du naturel, Composée de deux unités de production ; unité de N’gaous et l’unité de Menaa, elle est parmi les anciennes entreprises algériennes, spécialisées dans la transformation des fruits, fabrication et commercialisation des eaux fruitées, jus &amp; conserves, située à N’gaous, à la Wilaya de Batna à l’est de l’Algérie, une région agricole, riche de sa production d’abricot, sa création était en 1979 par un contrat signé avec la société française CIFAL, 1981 était la première année de production, sous la tutelle du groupe ENAJUC. (Entreprise Nationale des Jus et Conserves). Le 01/01/1998, l’entreprise a été restructurée dans le cadre de la filialisation de la société mère ENAJUC pour devenir N’gaous – Conserves. Privatisée le 17/02/2007, et actuellement elle est détenue à 100% par le Groupe MAAZOUZ. La gamme de produits N’GAOUS est issue des abricot parfumé et naturellement riche en sucre soigneusement sélectionner dans les vergers de N’GAOUS et MENAA ce qui rend le nectar d’abricot N’GAOUS si particulièrement bon et unique.',
                        tags: [
                            'Joomla',
                            'Bootstrap',
                            'Gsap',
                            'HTML 5',
                            'CSS 3',
                            'JQuery',
                            'Animate.css',
                            'Parrallax',
                        ]
                    },
                    {
                        name: 'Ramy Food',
                        description: 'TAIBA FOOD COMANY (TFC) est une entreprise algérienne privée issue en 2007 de l’entreprise DELICE FOOD COMPANY (DFC) laquelle a débuté son activité en 2005. TFC opère dans le domaine des produits agroalimentaires plus exactement dans le domaine de la production des boissons non alcoolisées. TFC est spécialisée dans la production et la distribution des boissons non alcoolisées à savoir les jus de fruit, boissons gazeuses et boissons énergétiques sous la marque RAMY. Le site de production est implanté au niveau de la zone industrielle de Rouïba à Alger qui s’avère être une zone stratégique pour l’approvisionnement en matière première ainsi que pour la distribution du produit fini sur le territoire national',
                        tags: [
                            'Joomla',
                            'Bootstrap',
                            'HTML 5',
                            'CSS 3',
                            'JQuery',
                            'Animate.css',
                        ]
                    },
                    {
                        name: 'Bridgestone Algérie',
                        description: 'Fondé en 1931 par Shōjirō Ishibashi à Kurume au Japon, ce manufacturier de pneumatiques d’envergure mondiale a emprunté, à l’origine, son nom de son fondateur. Ishibashi signifie pont de pierre en japonais.',
                        tags: [
                            'Joomla',
                            'Bootstrap',
                            'HTML 5',
                            'CSS 3',
                            'JQuery',
                            'Animate.css',
                        ]
                    }
                ]
            },
            {
                categoryName: 'Web Application',
                nameList: [
                    {
                        name: 'B2B Brandt france',
                        description: 'L‘application business to business pour les grands distributeur du groupe français Brandt France',
                        tags: [
                            'Spring Boot',
                            'SQL Server',
                            'HTML 5',
                            'CSS 3',
                            'Rest API',
                        ]
                    },
                ]
            }
        ]
        try {
            for (const project of projects) {
                await this.createProject(project);
            }
        } catch (error) {
            throw error;
        }
    }
    async createProject(projects: any): Promise<any> {
        let category = new Category();
        let categories: Category[];
        // let categoryNameObj = { name: projects.categoryName };
        // category = await this.categoryRepository.findOneOrFail({ where: { categoryNameObj } });
        categories = await this.categoryRepository.find({ where: { name: projects.categoryName } });
        if (categories[0]) {
            category = categories[0];
        } else {
            category.name = projects.categoryName;
            category.createdAt = category.updatedAt = new Date();
            await this.categoryRepository.save(category)
        }
        console.log('%c⧭ categories', 'color: #733d00', categories);
        for (let prj of projects.nameList) {
            let project = new Project();
            let tags: Tag[] = [];
            project.category = category;
            project.name = prj.name;
            project.description = prj.description;
            project.createdAt = project.updatedAt = new Date();
            for (let tagName of prj.tags) {
                let tag = new Tag();
                let findedTags: Tag[] = [];
                // let tagNameObj = { name: tagName };
                findedTags = await this.tagRepository.find({ where: { name: tagName } });
                if (findedTags[0]) {
                    tag = findedTags[0];
                }
                else {
                    console.log('%c⧭ the tag  is 💩💩:', 'color: #00a3cc', tag);
                    tag.createdAt = tag.updatedAt = new Date();
                    tag.name = tagName;
                    await this.tagRepository.save(tag);
                }
                console.log(`%c⧭ the tag  is 🦄 ${tagName}: `, 'color: #00a3cc', tag);
                tags.push(tag);
            }
            // await prj.tags.forEach(async (tagName: string) => {

            // });
            project.tags = tags;
            console.log('%c⧭ project', 'color: #00bf00', project);
            await this.projectRepository.save(project);
        }
        // await projects.nameList.forEach(async (prj: any) => {

        // })
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
    }
}
